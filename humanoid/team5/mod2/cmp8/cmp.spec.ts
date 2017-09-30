
import { Cmp7528Component } from './cmp';
describe('Cmp7528Component', () => {
  it('should add', () => {
    expect(new Cmp7528Component().add7528(1)).toBe(7529);
  });
});