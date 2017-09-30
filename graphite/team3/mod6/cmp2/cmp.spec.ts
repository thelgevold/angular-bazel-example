
import { Cmp6362Component } from './cmp';
describe('Cmp6362Component', () => {
  it('should add', () => {
    expect(new Cmp6362Component().add6362(1)).toBe(6363);
  });
});