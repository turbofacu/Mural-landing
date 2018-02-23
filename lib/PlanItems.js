export const PlanItems = [
  {
    planName: 'Startup',
    planUsers: '5',
    ranges: {
      type: 'bullets',
      values: [
        {
          quantity: '29',
          date: 'month',
          checked: true,
        },
        {
          quantity: '300',
          date: 'year',
          checked: false,
        },
      ],
    },
    buttons: [
      {
        text: 'Choose this plan',
        url: 'url-to-go',
        type: 'black',
      },
    ],
    includes: {
      planTips: [
        'Growing startup',
        'Freelancer with a frew rotating clients',
      ],
      features: [
        '5 Project Rooms',
        'xGB Storage',
        'Visual Thinking Tools',
        'Collaboration Tools',
        'Self-Servide Support',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
      ],
    },
  },
  {
    planName: 'Business',
    planUsers: '5',
    ranges: {
      type: 'slider',
      values: [
        {
          min: 6,
          max: 30,
          increasePerUser: '100',
        },
      ],
    },
    buttons: [
      {
        text: 'Choose this plan',
        url: 'url-to-go',
        type: 'pink',
      },
    ],
    includes: {
      planTips: [
        'Leading design team within a big company',
        'Distributed business in which visual collaboration is key to success',
      ],
      features: [
        'Unlimited Rooms',
        'Unlimited Storage',
        'Visual Thinking Tools',
        'Collaboration Tools',
        'Priority Support',
        'Larger Team Sizes',
        'Custom Templates',
        'Guest Accounts',
        '-',
        '-',
        '-',
      ],
    },
  },
  {
    planName: 'Enterprise',
    planUsers: 30,
    ranges: {
      type: 'none',
    },
    buttons: [
      {
        text: 'Learn More',
        url: 'url-to-go',
        type: 'border',
      },
      {
        text: 'Contact Us',
        url: 'url-to-go',
        type: 'black',
      },
    ],
    includes: {
      planTips: [
        'Business that successfully integrated MURAL and is ready to deploy at scale',
        'Design-led Fortune 1000 Company',
      ],
      features: [
        'Unlimited Rooms',
        'Unlimited Storage',
        'Visual Thinking Tools',
        'Collaboration Tools',
        'On-Call Customer Success Manager',
        'Multiple Teams',
        'Custom Templates',
        'Guest Accounts',
        'Enterprise-Grade Security',
        'Admin Dashboard & Analytics',
        'Single Sign-On SAML Integration',
      ],
    },
  },
]

export default PlanItems
