
import { Cmp6890Component } from './cmp';
describe('Cmp6890Component', () => {
  it('should add', () => {
    expect(new Cmp6890Component().add6890(1)).toBe(6891);
  });
});