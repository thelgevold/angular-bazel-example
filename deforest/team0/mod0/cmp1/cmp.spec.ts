
import { Cmp3001Component } from './cmp';
describe('Cmp3001Component', () => {
  it('should add', () => {
    expect(new Cmp3001Component().add3001(1)).toBe(3002);
  });
});