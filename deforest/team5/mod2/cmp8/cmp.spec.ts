
import { Cmp3528Component } from './cmp';
describe('Cmp3528Component', () => {
  it('should add', () => {
    expect(new Cmp3528Component().add3528(1)).toBe(3529);
  });
});