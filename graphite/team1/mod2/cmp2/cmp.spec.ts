
import { Cmp6122Component } from './cmp';
describe('Cmp6122Component', () => {
  it('should add', () => {
    expect(new Cmp6122Component().add6122(1)).toBe(6123);
  });
});