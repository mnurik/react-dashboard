export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-grid'
    },
    {
      name: 'Reservation',
      url: '/reservation',
      icon: 'icon-basket',
      children: [
        {
          name: 'Search',
          url: '/form',
          icon: 'icon-magnifier'
        },
        {
          name: 'List',
          url: '/reservation/list',
          icon: 'icon-list'
        }
      ]
    },
    {
      name: 'Rooms',
      url: '/room',
      icon: 'icon-key',
      children: [
        {
          name: 'Search',
          url: '/form',
          icon: 'icon-magnifier'
        },
        {
          name: 'List',
          url: '/room/list',
          icon: 'icon-list'
        }
      ]
    },
    {
      name: 'Building',
      url: '/building',
      icon: 'icon-home'
    }
  ]
}
