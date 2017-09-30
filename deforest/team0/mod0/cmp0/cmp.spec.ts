
import { Cmp3000Component } from './cmp';
describe('Cmp3000Component', () => {
  it('should add', () => {
    expect(new Cmp3000Component().add3000(1)).toBe(3001);
  });
});