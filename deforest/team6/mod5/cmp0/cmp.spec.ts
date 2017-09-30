
import { Cmp3650Component } from './cmp';
describe('Cmp3650Component', () => {
  it('should add', () => {
    expect(new Cmp3650Component().add3650(1)).toBe(3651);
  });
});