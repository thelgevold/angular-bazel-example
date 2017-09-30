
import { Cmp9650Component } from './cmp';
describe('Cmp9650Component', () => {
  it('should add', () => {
    expect(new Cmp9650Component().add9650(1)).toBe(9651);
  });
});