
import { Cmp1802Component } from './cmp';
describe('Cmp1802Component', () => {
  it('should add', () => {
    expect(new Cmp1802Component().add1802(1)).toBe(1803);
  });
});