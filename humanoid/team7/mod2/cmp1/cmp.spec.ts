
import { Cmp7721Component } from './cmp';
describe('Cmp7721Component', () => {
  it('should add', () => {
    expect(new Cmp7721Component().add7721(1)).toBe(7722);
  });
});