
import { Cmp4920Component } from './cmp';
describe('Cmp4920Component', () => {
  it('should add', () => {
    expect(new Cmp4920Component().add4920(1)).toBe(4921);
  });
});