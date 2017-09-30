
import { Cmp6124Component } from './cmp';
describe('Cmp6124Component', () => {
  it('should add', () => {
    expect(new Cmp6124Component().add6124(1)).toBe(6125);
  });
});