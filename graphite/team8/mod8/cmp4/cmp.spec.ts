
import { Cmp6884Component } from './cmp';
describe('Cmp6884Component', () => {
  it('should add', () => {
    expect(new Cmp6884Component().add6884(1)).toBe(6885);
  });
});