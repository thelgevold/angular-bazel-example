
import { Cmp6092Component } from './cmp';
describe('Cmp6092Component', () => {
  it('should add', () => {
    expect(new Cmp6092Component().add6092(1)).toBe(6093);
  });
});