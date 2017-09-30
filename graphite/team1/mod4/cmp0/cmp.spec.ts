
import { Cmp6140Component } from './cmp';
describe('Cmp6140Component', () => {
  it('should add', () => {
    expect(new Cmp6140Component().add6140(1)).toBe(6141);
  });
});