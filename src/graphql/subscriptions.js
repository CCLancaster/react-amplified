/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAcademicYear = /* GraphQL */ `
  subscription OnCreateAcademicYear {
    onCreateAcademicYear {
      id
      year
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAcademicYear = /* GraphQL */ `
  subscription OnUpdateAcademicYear {
    onUpdateAcademicYear {
      id
      year
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAcademicYear = /* GraphQL */ `
  subscription OnDeleteAcademicYear {
    onDeleteAcademicYear {
      id
      year
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const onCreateClass = /* GraphQL */ `
  subscription OnCreateClass {
    onCreateClass {
      id
      awarded
      classNumber
      className
      fees
      invoice
      paid
      paidDate
      quarter
      reimbursed
      reimbursedDate
      status
      tuition
      undetermined
      voucher
      studentID
      academicID
      academicYear {
        id
        year
        isActive
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass {
    onUpdateClass {
      id
      awarded
      classNumber
      className
      fees
      invoice
      paid
      paidDate
      quarter
      reimbursed
      reimbursedDate
      status
      tuition
      undetermined
      voucher
      studentID
      academicID
      academicYear {
        id
        year
        isActive
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass {
    onDeleteClass {
      id
      awarded
      classNumber
      className
      fees
      invoice
      paid
      paidDate
      quarter
      reimbursed
      reimbursedDate
      status
      tuition
      undetermined
      voucher
      studentID
      academicID
      academicYear {
        id
        year
        isActive
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateDocument = /* GraphQL */ `
  subscription OnCreateDocument {
    onCreateDocument {
      id
      link
      title
      studentID
      student {
        id
        archiveStudent
        dateOfBirth
        docNum
        fafsaReceived
        firstName
        lastName
        newStudent
        race
        readyToAward
        runwayCohort
        sentToAccounting
        ubbId
        academicYearStatus {
          financialAidStatus
          studentStatus
        }
        gpa {
          value
          asOfDate
        }
        location {
          name
          asOfDate
        }
        classes {
          nextToken
        }
        documents {
          nextToken
        }
        notes {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDocument = /* GraphQL */ `
  subscription OnUpdateDocument {
    onUpdateDocument {
      id
      link
      title
      studentID
      student {
        id
        archiveStudent
        dateOfBirth
        docNum
        fafsaReceived
        firstName
        lastName
        newStudent
        race
        readyToAward
        runwayCohort
        sentToAccounting
        ubbId
        academicYearStatus {
          financialAidStatus
          studentStatus
        }
        gpa {
          value
          asOfDate
        }
        location {
          name
          asOfDate
        }
        classes {
          nextToken
        }
        documents {
          nextToken
        }
        notes {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDocument = /* GraphQL */ `
  subscription OnDeleteDocument {
    onDeleteDocument {
      id
      link
      title
      studentID
      student {
        id
        archiveStudent
        dateOfBirth
        docNum
        fafsaReceived
        firstName
        lastName
        newStudent
        race
        readyToAward
        runwayCohort
        sentToAccounting
        ubbId
        academicYearStatus {
          financialAidStatus
          studentStatus
        }
        gpa {
          value
          asOfDate
        }
        location {
          name
          asOfDate
        }
        classes {
          nextToken
        }
        documents {
          nextToken
        }
        notes {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote {
    onCreateNote {
      id
      bookmark
      createdDate
      note
      userID
      studentID
      user {
        id
        admin
        avatar
        email
        color
        firstName
        lastName
        token
        notes {
          nextToken
        }
        quickLinks {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
      }
      student {
        id
        archiveStudent
        dateOfBirth
        docNum
        fafsaReceived
        firstName
        lastName
        newStudent
        race
        readyToAward
        runwayCohort
        sentToAccounting
        ubbId
        academicYearStatus {
          financialAidStatus
          studentStatus
        }
        gpa {
          value
          asOfDate
        }
        location {
          name
          asOfDate
        }
        classes {
          nextToken
        }
        documents {
          nextToken
        }
        notes {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote {
    onUpdateNote {
      id
      bookmark
      createdDate
      note
      userID
      studentID
      user {
        id
        admin
        avatar
        email
        color
        firstName
        lastName
        token
        notes {
          nextToken
        }
        quickLinks {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
      }
      student {
        id
        archiveStudent
        dateOfBirth
        docNum
        fafsaReceived
        firstName
        lastName
        newStudent
        race
        readyToAward
        runwayCohort
        sentToAccounting
        ubbId
        academicYearStatus {
          financialAidStatus
          studentStatus
        }
        gpa {
          value
          asOfDate
        }
        location {
          name
          asOfDate
        }
        classes {
          nextToken
        }
        documents {
          nextToken
        }
        notes {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote {
    onDeleteNote {
      id
      bookmark
      createdDate
      note
      userID
      studentID
      user {
        id
        admin
        avatar
        email
        color
        firstName
        lastName
        token
        notes {
          nextToken
        }
        quickLinks {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
      }
      student {
        id
        archiveStudent
        dateOfBirth
        docNum
        fafsaReceived
        firstName
        lastName
        newStudent
        race
        readyToAward
        runwayCohort
        sentToAccounting
        ubbId
        academicYearStatus {
          financialAidStatus
          studentStatus
        }
        gpa {
          value
          asOfDate
        }
        location {
          name
          asOfDate
        }
        classes {
          nextToken
        }
        documents {
          nextToken
        }
        notes {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateQuickLink = /* GraphQL */ `
  subscription OnCreateQuickLink {
    onCreateQuickLink {
      id
      title
      link
      userID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateQuickLink = /* GraphQL */ `
  subscription OnUpdateQuickLink {
    onUpdateQuickLink {
      id
      title
      link
      userID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteQuickLink = /* GraphQL */ `
  subscription OnDeleteQuickLink {
    onDeleteQuickLink {
      id
      title
      link
      userID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent {
    onCreateStudent {
      id
      archiveStudent
      dateOfBirth
      docNum
      fafsaReceived
      firstName
      lastName
      newStudent
      race
      readyToAward
      runwayCohort
      sentToAccounting
      ubbId
      academicYearStatus {
        academicYear {
          id
          year
          isActive
          createdAt
          updatedAt
        }
        financialAidStatus
        studentStatus
      }
      gpa {
        value
        asOfDate
      }
      location {
        name
        asOfDate
      }
      classes {
        items {
          id
          awarded
          classNumber
          className
          fees
          invoice
          paid
          paidDate
          quarter
          reimbursed
          reimbursedDate
          status
          tuition
          undetermined
          voucher
          studentID
          academicID
          createdAt
          updatedAt
        }
        nextToken
      }
      documents {
        items {
          id
          link
          title
          studentID
          createdAt
          updatedAt
        }
        nextToken
      }
      notes {
        items {
          id
          bookmark
          createdDate
          note
          userID
          studentID
          createdAt
          updatedAt
        }
        nextToken
      }
      tasks {
        items {
          id
          assignedDate
          completed
          completedDate
          detail
          document
          dueDate
          flag
          studentID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent {
    onUpdateStudent {
      id
      archiveStudent
      dateOfBirth
      docNum
      fafsaReceived
      firstName
      lastName
      newStudent
      race
      readyToAward
      runwayCohort
      sentToAccounting
      ubbId
      academicYearStatus {
        academicYear {
          id
          year
          isActive
          createdAt
          updatedAt
        }
        financialAidStatus
        studentStatus
      }
      gpa {
        value
        asOfDate
      }
      location {
        name
        asOfDate
      }
      classes {
        items {
          id
          awarded
          classNumber
          className
          fees
          invoice
          paid
          paidDate
          quarter
          reimbursed
          reimbursedDate
          status
          tuition
          undetermined
          voucher
          studentID
          academicID
          createdAt
          updatedAt
        }
        nextToken
      }
      documents {
        items {
          id
          link
          title
          studentID
          createdAt
          updatedAt
        }
        nextToken
      }
      notes {
        items {
          id
          bookmark
          createdDate
          note
          userID
          studentID
          createdAt
          updatedAt
        }
        nextToken
      }
      tasks {
        items {
          id
          assignedDate
          completed
          completedDate
          detail
          document
          dueDate
          flag
          studentID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent {
    onDeleteStudent {
      id
      archiveStudent
      dateOfBirth
      docNum
      fafsaReceived
      firstName
      lastName
      newStudent
      race
      readyToAward
      runwayCohort
      sentToAccounting
      ubbId
      academicYearStatus {
        academicYear {
          id
          year
          isActive
          createdAt
          updatedAt
        }
        financialAidStatus
        studentStatus
      }
      gpa {
        value
        asOfDate
      }
      location {
        name
        asOfDate
      }
      classes {
        items {
          id
          awarded
          classNumber
          className
          fees
          invoice
          paid
          paidDate
          quarter
          reimbursed
          reimbursedDate
          status
          tuition
          undetermined
          voucher
          studentID
          academicID
          createdAt
          updatedAt
        }
        nextToken
      }
      documents {
        items {
          id
          link
          title
          studentID
          createdAt
          updatedAt
        }
        nextToken
      }
      notes {
        items {
          id
          bookmark
          createdDate
          note
          userID
          studentID
          createdAt
          updatedAt
        }
        nextToken
      }
      tasks {
        items {
          id
          assignedDate
          completed
          completedDate
          detail
          document
          dueDate
          flag
          studentID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
      id
      assignedDate
      completed
      completedDate
      detail
      document
      dueDate
      flag
      studentID
      student {
        id
        archiveStudent
        dateOfBirth
        docNum
        fafsaReceived
        firstName
        lastName
        newStudent
        race
        readyToAward
        runwayCohort
        sentToAccounting
        ubbId
        academicYearStatus {
          financialAidStatus
          studentStatus
        }
        gpa {
          value
          asOfDate
        }
        location {
          name
          asOfDate
        }
        classes {
          nextToken
        }
        documents {
          nextToken
        }
        notes {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      user {
        id
        admin
        avatar
        email
        color
        firstName
        lastName
        token
        notes {
          nextToken
        }
        quickLinks {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
      id
      assignedDate
      completed
      completedDate
      detail
      document
      dueDate
      flag
      studentID
      student {
        id
        archiveStudent
        dateOfBirth
        docNum
        fafsaReceived
        firstName
        lastName
        newStudent
        race
        readyToAward
        runwayCohort
        sentToAccounting
        ubbId
        academicYearStatus {
          financialAidStatus
          studentStatus
        }
        gpa {
          value
          asOfDate
        }
        location {
          name
          asOfDate
        }
        classes {
          nextToken
        }
        documents {
          nextToken
        }
        notes {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      user {
        id
        admin
        avatar
        email
        color
        firstName
        lastName
        token
        notes {
          nextToken
        }
        quickLinks {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
      id
      assignedDate
      completed
      completedDate
      detail
      document
      dueDate
      flag
      studentID
      student {
        id
        archiveStudent
        dateOfBirth
        docNum
        fafsaReceived
        firstName
        lastName
        newStudent
        race
        readyToAward
        runwayCohort
        sentToAccounting
        ubbId
        academicYearStatus {
          financialAidStatus
          studentStatus
        }
        gpa {
          value
          asOfDate
        }
        location {
          name
          asOfDate
        }
        classes {
          nextToken
        }
        documents {
          nextToken
        }
        notes {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      user {
        id
        admin
        avatar
        email
        color
        firstName
        lastName
        token
        notes {
          nextToken
        }
        quickLinks {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      admin
      avatar
      email
      color
      firstName
      lastName
      token
      notes {
        items {
          id
          bookmark
          createdDate
          note
          userID
          studentID
          createdAt
          updatedAt
        }
        nextToken
      }
      quickLinks {
        items {
          id
          title
          link
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      tasks {
        items {
          id
          assignedDate
          completed
          completedDate
          detail
          document
          dueDate
          flag
          studentID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      admin
      avatar
      email
      color
      firstName
      lastName
      token
      notes {
        items {
          id
          bookmark
          createdDate
          note
          userID
          studentID
          createdAt
          updatedAt
        }
        nextToken
      }
      quickLinks {
        items {
          id
          title
          link
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      tasks {
        items {
          id
          assignedDate
          completed
          completedDate
          detail
          document
          dueDate
          flag
          studentID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      admin
      avatar
      email
      color
      firstName
      lastName
      token
      notes {
        items {
          id
          bookmark
          createdDate
          note
          userID
          studentID
          createdAt
          updatedAt
        }
        nextToken
      }
      quickLinks {
        items {
          id
          title
          link
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      tasks {
        items {
          id
          assignedDate
          completed
          completedDate
          detail
          document
          dueDate
          flag
          studentID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
