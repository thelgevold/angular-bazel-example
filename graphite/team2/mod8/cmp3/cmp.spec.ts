
import { Cmp6283Component } from './cmp';
describe('Cmp6283Component', () => {
  it('should add', () => {
    expect(new Cmp6283Component().add6283(1)).toBe(6284);
  });
});