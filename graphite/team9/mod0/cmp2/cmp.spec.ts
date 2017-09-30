
import { Cmp6902Component } from './cmp';
describe('Cmp6902Component', () => {
  it('should add', () => {
    expect(new Cmp6902Component().add6902(1)).toBe(6903);
  });
});