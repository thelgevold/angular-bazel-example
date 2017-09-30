
import { Cmp4100Component } from './cmp';
describe('Cmp4100Component', () => {
  it('should add', () => {
    expect(new Cmp4100Component().add4100(1)).toBe(4101);
  });
});