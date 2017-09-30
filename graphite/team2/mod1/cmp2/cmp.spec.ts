
import { Cmp6212Component } from './cmp';
describe('Cmp6212Component', () => {
  it('should add', () => {
    expect(new Cmp6212Component().add6212(1)).toBe(6213);
  });
});