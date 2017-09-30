
import { Cmp3100Component } from './cmp';
describe('Cmp3100Component', () => {
  it('should add', () => {
    expect(new Cmp3100Component().add3100(1)).toBe(3101);
  });
});