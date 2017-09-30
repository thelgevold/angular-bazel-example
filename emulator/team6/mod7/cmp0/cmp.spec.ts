
import { Cmp4670Component } from './cmp';
describe('Cmp4670Component', () => {
  it('should add', () => {
    expect(new Cmp4670Component().add4670(1)).toBe(4671);
  });
});