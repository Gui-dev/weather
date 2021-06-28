export interface IWeatherProps {
  results: {
    temp: string
    city: string
    city_name: string
    condition_code: string
    condition_slug: string
    currently: string
    date: string
    description: string
    forecast: [{
      condition: string
      date: string
      description: string
      max: number
      min: number
      weekday: string
    }]
  }
}
