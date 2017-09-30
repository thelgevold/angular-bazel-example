
import { Cmp4032Component } from './cmp';
describe('Cmp4032Component', () => {
  it('should add', () => {
    expect(new Cmp4032Component().add4032(1)).toBe(4033);
  });
});