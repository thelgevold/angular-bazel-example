
import { Cmp1987Component } from './cmp';
describe('Cmp1987Component', () => {
  it('should add', () => {
    expect(new Cmp1987Component().add1987(1)).toBe(1988);
  });
});