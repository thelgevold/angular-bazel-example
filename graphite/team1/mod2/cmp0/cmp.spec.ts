
import { Cmp6120Component } from './cmp';
describe('Cmp6120Component', () => {
  it('should add', () => {
    expect(new Cmp6120Component().add6120(1)).toBe(6121);
  });
});