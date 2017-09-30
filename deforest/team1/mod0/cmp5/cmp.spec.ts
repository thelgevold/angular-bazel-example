
import { Cmp3105Component } from './cmp';
describe('Cmp3105Component', () => {
  it('should add', () => {
    expect(new Cmp3105Component().add3105(1)).toBe(3106);
  });
});