
import { Cmp6961Component } from './cmp';
describe('Cmp6961Component', () => {
  it('should add', () => {
    expect(new Cmp6961Component().add6961(1)).toBe(6962);
  });
});