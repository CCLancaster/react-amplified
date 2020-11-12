/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createAcademicYear = /* GraphQL */ `
  mutation CreateAcademicYear(
    $input: CreateAcademicYearInput!
    $condition: ModelAcademicYearConditionInput
  ) {
    createAcademicYear(input: $input, condition: $condition) {
      id
      year
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const updateAcademicYear = /* GraphQL */ `
  mutation UpdateAcademicYear(
    $input: UpdateAcademicYearInput!
    $condition: ModelAcademicYearConditionInput
  ) {
    updateAcademicYear(input: $input, condition: $condition) {
      id
      year
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const deleteAcademicYear = /* GraphQL */ `
  mutation DeleteAcademicYear(
    $input: DeleteAcademicYearInput!
    $condition: ModelAcademicYearConditionInput
  ) {
    deleteAcademicYear(input: $input, condition: $condition) {
      id
      year
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const createClass = /* GraphQL */ `
  mutation CreateClass(
    $input: CreateClassInput!
    $condition: ModelClassConditionInput
  ) {
    createClass(input: $input, condition: $condition) {
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
export const updateClass = /* GraphQL */ `
  mutation UpdateClass(
    $input: UpdateClassInput!
    $condition: ModelClassConditionInput
  ) {
    updateClass(input: $input, condition: $condition) {
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
export const deleteClass = /* GraphQL */ `
  mutation DeleteClass(
    $input: DeleteClassInput!
    $condition: ModelClassConditionInput
  ) {
    deleteClass(input: $input, condition: $condition) {
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
export const createDocument = /* GraphQL */ `
  mutation CreateDocument(
    $input: CreateDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    createDocument(input: $input, condition: $condition) {
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
export const updateDocument = /* GraphQL */ `
  mutation UpdateDocument(
    $input: UpdateDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    updateDocument(input: $input, condition: $condition) {
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
export const deleteDocument = /* GraphQL */ `
  mutation DeleteDocument(
    $input: DeleteDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    deleteDocument(input: $input, condition: $condition) {
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
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
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
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
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
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
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
export const createQuickLink = /* GraphQL */ `
  mutation CreateQuickLink(
    $input: CreateQuickLinkInput!
    $condition: ModelQuickLinkConditionInput
  ) {
    createQuickLink(input: $input, condition: $condition) {
      id
      title
      link
      userID
      createdAt
      updatedAt
    }
  }
`;
export const updateQuickLink = /* GraphQL */ `
  mutation UpdateQuickLink(
    $input: UpdateQuickLinkInput!
    $condition: ModelQuickLinkConditionInput
  ) {
    updateQuickLink(input: $input, condition: $condition) {
      id
      title
      link
      userID
      createdAt
      updatedAt
    }
  }
`;
export const deleteQuickLink = /* GraphQL */ `
  mutation DeleteQuickLink(
    $input: DeleteQuickLinkInput!
    $condition: ModelQuickLinkConditionInput
  ) {
    deleteQuickLink(input: $input, condition: $condition) {
      id
      title
      link
      userID
      createdAt
      updatedAt
    }
  }
`;
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
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
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
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
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
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
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
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
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
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
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
