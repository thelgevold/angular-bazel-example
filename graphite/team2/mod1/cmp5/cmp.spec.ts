
import { Cmp6215Component } from './cmp';
describe('Cmp6215Component', () => {
  it('should add', () => {
    expect(new Cmp6215Component().add6215(1)).toBe(6216);
  });
});