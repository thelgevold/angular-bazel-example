
import { Cmp7163Component } from './cmp';
describe('Cmp7163Component', () => {
  it('should add', () => {
    expect(new Cmp7163Component().add7163(1)).toBe(7164);
  });
});