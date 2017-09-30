
import { Cmp6061Component } from './cmp';
describe('Cmp6061Component', () => {
  it('should add', () => {
    expect(new Cmp6061Component().add6061(1)).toBe(6062);
  });
});