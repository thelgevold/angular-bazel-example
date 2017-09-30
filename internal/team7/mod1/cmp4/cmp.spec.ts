
import { Cmp8714Component } from './cmp';
describe('Cmp8714Component', () => {
  it('should add', () => {
    expect(new Cmp8714Component().add8714(1)).toBe(8715);
  });
});