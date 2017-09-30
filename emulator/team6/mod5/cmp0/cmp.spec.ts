
import { Cmp4650Component } from './cmp';
describe('Cmp4650Component', () => {
  it('should add', () => {
    expect(new Cmp4650Component().add4650(1)).toBe(4651);
  });
});