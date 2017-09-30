
import { Cmp6310Component } from './cmp';
describe('Cmp6310Component', () => {
  it('should add', () => {
    expect(new Cmp6310Component().add6310(1)).toBe(6311);
  });
});