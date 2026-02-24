import { Injectable } from '@angular/core';

export interface VisitLog {
  visitNumber: number;
  date: string;
  location: string;
  ip: string;
}

@Injectable({
  providedIn: 'root'
})
export class VisitLoggerService {
  private readonly VISIT_COUNT_KEY = 'visitCount';
  private readonly VISIT_LOGS_KEY = 'visitLogs';

  constructor() {
    // this.logVisit();
  }

  // private async logVisit(): Promise<void> {
  //   try {
  //     // const visitCount = this.getVisitCount() + 1;
  //     const date = new Date().toISOString();
  //     const location = await this.getUserLocation();
  //     const ip = await this.getUserIP();

  //     const visitLog: VisitLog = {
  //       // visitNumber: visitCount,
  //       date,
  //       location,
  //       ip
  //     };

  //     this.saveVisitLog(visitLog);
  //     this.updateVisitCount(visitCount);

  //     // Log to console for debugging
  //     console.log(`Visit logged: ${visitLog.visitNumber} | ${visitLog.date} | ${visitLog.location} | ${visitLog.ip}`);

  //   } catch (error) {
  //     console.error('Error logging visit:', error);
  //   }
  // }

  // private getVisitCount(): number {
  //   const count = localStorage.getItem(this.VISIT_COUNT_KEY);
  //   return count ? parseInt(count, 10) : 0;
  // }

  // private updateVisitCount(count: number): void {
  //   localStorage.setItem(this.VISIT_COUNT_KEY, count.toString());
  // }

  // private saveVisitLog(visitLog: VisitLog): void {
  //   const logs = this.getAllVisitLogs();
  //   logs.push(visitLog);
  //   localStorage.setItem(this.VISIT_LOGS_KEY, JSON.stringify(logs));
  // }

  private async getUserLocation(): Promise<string> {
    try {
      // Try to get location from IP geolocation API
      const response = await fetch('https://ipapi.co/json/');
      if (response.ok) {
        const data = await response.json();
        return data.country_name || 'Unknown';
      }
    } catch (error) {
      console.warn('Could not fetch location from IP API:', error);
    }

    // Fallback: Try browser geolocation API
    if (navigator.geolocation) {
      return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            try {
              const { latitude, longitude } = position.coords;
              const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
              if (response.ok) {
                const data = await response.json();
                resolve(data.countryName || 'Unknown');
              } else {
                resolve('Unknown');
              }
            } catch {
              resolve('Unknown');
            }
          },
          () => resolve('Unknown'),
          { timeout: 5000 }
        );
      });
    }

    return 'Unknown';
  }

  private async getUserIP(): Promise<string> {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      if (response.ok) {
        const data = await response.json();
        return data.ip || 'Unknown';
      }
    } catch (error) {
      console.warn('Could not fetch IP address:', error);
    }
    return 'Unknown';
  }

  // getAllVisitLogs(): VisitLog[] {
  //   const logs = localStorage.getItem(this.VISIT_LOGS_KEY);
  //   return logs ? JSON.parse(logs) : [];
  // }

  // getVisitLogsAsText(): string {
  //   const logs = this.getAllVisitLogs();
  //   return logs.map(log => 
  //     `${log.visitNumber}\t${log.date}\t${log.location}\t${log.ip}`
  //   ).join('\n');
  // }

  // downloadVisitLogs(): void {
  //   const logsText = this.getVisitLogsAsText();
  //   const blob = new Blob([logsText], { type: 'text/plain' });
  //   const url = window.URL.createObjectURL(blob);
    
  //   const link = document.createElement('a');
  //   link.href = url;
  //   link.download = 'visit-logs.txt';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  //   window.URL.revokeObjectURL(url);
  // }

  // clearLogs(): void {
  //   localStorage.removeItem(this.VISIT_LOGS_KEY);
  //   localStorage.removeItem(this.VISIT_COUNT_KEY);
  // }
}