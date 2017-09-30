
import { Cmp6607Component } from './cmp';
describe('Cmp6607Component', () => {
  it('should add', () => {
    expect(new Cmp6607Component().add6607(1)).toBe(6608);
  });
});