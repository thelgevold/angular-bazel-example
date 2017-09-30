
import { Cmp2604Component } from './cmp';
describe('Cmp2604Component', () => {
  it('should add', () => {
    expect(new Cmp2604Component().add2604(1)).toBe(2605);
  });
});