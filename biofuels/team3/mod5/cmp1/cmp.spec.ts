
import { Cmp1351Component } from './cmp';
describe('Cmp1351Component', () => {
  it('should add', () => {
    expect(new Cmp1351Component().add1351(1)).toBe(1352);
  });
});