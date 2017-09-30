
import { Cmp6650Component } from './cmp';
describe('Cmp6650Component', () => {
  it('should add', () => {
    expect(new Cmp6650Component().add6650(1)).toBe(6651);
  });
});