
import { Cmp7650Component } from './cmp';
describe('Cmp7650Component', () => {
  it('should add', () => {
    expect(new Cmp7650Component().add7650(1)).toBe(7651);
  });
});