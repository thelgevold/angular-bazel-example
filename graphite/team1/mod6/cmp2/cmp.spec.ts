
import { Cmp6162Component } from './cmp';
describe('Cmp6162Component', () => {
  it('should add', () => {
    expect(new Cmp6162Component().add6162(1)).toBe(6163);
  });
});