
import { Cmp3040Component } from './cmp';
describe('Cmp3040Component', () => {
  it('should add', () => {
    expect(new Cmp3040Component().add3040(1)).toBe(3041);
  });
});