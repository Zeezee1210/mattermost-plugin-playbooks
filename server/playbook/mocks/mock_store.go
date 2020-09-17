// Code generated by MockGen. DO NOT EDIT.
// Source: github.com/mattermost/mattermost-plugin-incident-response/server/playbook (interfaces: Store)

// Package mock_playbook is a generated GoMock package.
package mock_playbook

import (
	gomock "github.com/golang/mock/gomock"
	playbook "github.com/mattermost/mattermost-plugin-incident-response/server/playbook"
	reflect "reflect"
)

// MockStore is a mock of Store interface
type MockStore struct {
	ctrl     *gomock.Controller
	recorder *MockStoreMockRecorder
}

// MockStoreMockRecorder is the mock recorder for MockStore
type MockStoreMockRecorder struct {
	mock *MockStore
}

// NewMockStore creates a new mock instance
func NewMockStore(ctrl *gomock.Controller) *MockStore {
	mock := &MockStore{ctrl: ctrl}
	mock.recorder = &MockStoreMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use
func (m *MockStore) EXPECT() *MockStoreMockRecorder {
	return m.recorder
}

// Create mocks base method
func (m *MockStore) Create(arg0 playbook.Playbook) (string, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Create", arg0)
	ret0, _ := ret[0].(string)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// Create indicates an expected call of Create
func (mr *MockStoreMockRecorder) Create(arg0 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Create", reflect.TypeOf((*MockStore)(nil).Create), arg0)
}

// Delete mocks base method
func (m *MockStore) Delete(arg0 string) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Delete", arg0)
	ret0, _ := ret[0].(error)
	return ret0
}

// Delete indicates an expected call of Delete
func (mr *MockStoreMockRecorder) Delete(arg0 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Delete", reflect.TypeOf((*MockStore)(nil).Delete), arg0)
}

// Get mocks base method
func (m *MockStore) Get(arg0 string) (playbook.Playbook, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Get", arg0)
	ret0, _ := ret[0].(playbook.Playbook)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// Get indicates an expected call of Get
func (mr *MockStoreMockRecorder) Get(arg0 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Get", reflect.TypeOf((*MockStore)(nil).Get), arg0)
}

// GetPlaybooks mocks base method
func (m *MockStore) GetPlaybooks() ([]playbook.Playbook, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetPlaybooks")
	ret0, _ := ret[0].([]playbook.Playbook)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetPlaybooks indicates an expected call of GetPlaybooks
func (mr *MockStoreMockRecorder) GetPlaybooks() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetPlaybooks", reflect.TypeOf((*MockStore)(nil).GetPlaybooks))
}

// GetPlaybooksForTeam mocks base method
func (m *MockStore) GetPlaybooksForTeam(arg0 playbook.RequesterInfo, arg1 string, arg2 playbook.Options) (playbook.GetPlaybooksResults, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetPlaybooksForTeam", arg0, arg1, arg2)
	ret0, _ := ret[0].(playbook.GetPlaybooksResults)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetPlaybooksForTeam indicates an expected call of GetPlaybooksForTeam
func (mr *MockStoreMockRecorder) GetPlaybooksForTeam(arg0, arg1, arg2 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetPlaybooksForTeam", reflect.TypeOf((*MockStore)(nil).GetPlaybooksForTeam), arg0, arg1, arg2)
}

// Update mocks base method
func (m *MockStore) Update(arg0 playbook.Playbook) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Update", arg0)
	ret0, _ := ret[0].(error)
	return ret0
}

// Update indicates an expected call of Update
func (mr *MockStoreMockRecorder) Update(arg0 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Update", reflect.TypeOf((*MockStore)(nil).Update), arg0)
}