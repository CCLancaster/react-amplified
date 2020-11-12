/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAcademicYear = /* GraphQL */ `
  query GetAcademicYear($id: ID!) {
    getAcademicYear(id: $id) {
      id
      year
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const listAcademicYears = /* GraphQL */ `
  query ListAcademicYears(
    $filter: ModelAcademicYearFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAcademicYears(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        year
        isActive
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getClass = /* GraphQL */ `
  query GetClass($id: ID!) {
    getClass(id: $id) {
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
export const listClasss = /* GraphQL */ `
  query ListClasss(
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClasss(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getDocument = /* GraphQL */ `
  query GetDocument($id: ID!) {
    getDocument(id: $id) {
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
export const listDocuments = /* GraphQL */ `
  query ListDocuments(
    $filter: ModelDocumentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDocuments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
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
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getQuickLink = /* GraphQL */ `
  query GetQuickLink($id: ID!) {
    getQuickLink(id: $id) {
      id
      title
      link
      userID
      createdAt
      updatedAt
    }
  }
`;
export const listQuickLinks = /* GraphQL */ `
  query ListQuickLinks(
    $filter: ModelQuickLinkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuickLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
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
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
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
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
