
import { Cmp7100Component } from './cmp';
describe('Cmp7100Component', () => {
  it('should add', () => {
    expect(new Cmp7100Component().add7100(1)).toBe(7101);
  });
});