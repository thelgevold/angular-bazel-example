
import { Cmp2563Component } from './cmp';
describe('Cmp2563Component', () => {
  it('should add', () => {
    expect(new Cmp2563Component().add2563(1)).toBe(2564);
  });
});