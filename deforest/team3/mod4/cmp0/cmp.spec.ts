
import { Cmp3340Component } from './cmp';
describe('Cmp3340Component', () => {
  it('should add', () => {
    expect(new Cmp3340Component().add3340(1)).toBe(3341);
  });
});