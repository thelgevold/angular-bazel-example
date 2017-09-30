
import { Cmp3563Component } from './cmp';
describe('Cmp3563Component', () => {
  it('should add', () => {
    expect(new Cmp3563Component().add3563(1)).toBe(3564);
  });
});