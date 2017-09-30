
import { Cmp2080Component } from './cmp';
describe('Cmp2080Component', () => {
  it('should add', () => {
    expect(new Cmp2080Component().add2080(1)).toBe(2081);
  });
});